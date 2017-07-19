var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var demo;
(function (demo) {
    var HelpInfoDlg = (function (_super) {
        __extends(HelpInfoDlg, _super);
        function HelpInfoDlg() {
            var _this = this;
            _super.call(this);
            /**帮助页面的所有玩法标签 */
            this.gameTagOnBtns = {};
            this.gameTagOffBtns = {};
            /**牌间距 */
            this.cardSpace = 21;
            /**堆叠牌的垂直距离 */
            this.cardStackSpace = 12;
            /**文字行间距 */
            this.textSpace = 6;
            /** 不同标签之间默认距离 */
            this.titleSpace = 20;
            /**大标题文字字号 */
            this.titleFontSize = 36;
            /**其他文字字号 */
            this.otherFontSize = 24;
            /**牌型所占高度 */
            this.cardsBoxHeight = 74;
            /**缓存生成的麻将牌*/
            this.showCards = new Array();
            this.curTagPosY = 22;
            this.inputView = new demo.InputView();
            this.inputView.visible = false;
            this.scrollPanel.vScrollBarSkin = "";
            this.scrollPanel.vScrollBar.elasticBackTime = 200; //设置橡皮筋回弹时间。单位为毫秒。
            this.scrollPanel.vScrollBar.elasticDistance = 100; //设置橡皮筋极限距离。
            this.btnInput.on(Laya.Event.CLICK, this, function () { _this.inputView.visible = !_this.inputView.visible; });
            this.addChild(this.inputView);
            this.inputView.textArea.on(Laya.Event.ENTER, this, this.OnHelpInfoLoaded);
        }
        HelpInfoDlg.prototype.NeedBlackMask = function () { return true; };
        HelpInfoDlg.prototype.CloseWhenClickMask = function () { return { close: false, destroy: false }; };
        // public OnShow() {
        //     Laya.loader.load([
        //         { url: "res/helpInfo.json", type: Laya.Loader.TEXT }
        //     ], laya.utils.Handler.create(this, this.OnHelpInfoLoaded));
        // }
        /**生成文字并加入容器,文本属性已经设定好 */
        HelpInfoDlg.prototype.createLabel = function (text, color, fontSize) {
            var Label = new Laya.Label();
            Label.width = this.scrollPanel.width;
            Label.leading = this.textSpace;
            Label.color = color;
            Label.fontSize = fontSize;
            Label.wordWrap = true;
            Label.bold = true;
            Label.text = text;
            this.scrollPanel.addChild(Label);
            Label.y = this.currentPosY;
            this.currentPosY += Label.textField.height;
        };
        /**添加一张麻将到对应box中 */
        HelpInfoDlg.prototype.addOneCard = function (box, cardValue, X) {
            var cardInfo = demo.CardFactory.createCard(CardDefines.Chair.Down, CardDefines.CardState.Chupai, cardValue);
            this.showCards.push(cardInfo);
            box.addChild(cardInfo);
            cardInfo.x = X;
            cardInfo.y = 0;
            return cardInfo;
        };
        /**生成一个box用来盛放牌,来代替图片,所以完全按照图片尺寸来设定的固定值 */
        HelpInfoDlg.prototype.createCards = function (cards) {
            cards = eval(cards);
            var box = new Laya.Box();
            box.y = this.currentPosY;
            this.scrollPanel.addChild(box);
            this.currentPosY += this.cardsBoxHeight;
            var hasGang = false;
            var posX = 2 * this.cardSpace;
            //读取json中的cards属性并创建麻将牌
            for (var i = 0; i < cards.length; i++) {
                var card = cards[i];
                if (i == cards.length - 1) {
                    posX += this.cardSpace;
                }
                //如果card属性是一个数组则生成一个堆叠的牌来显示杠的效果,对于有杠的牌型额外进行小位置调整
                if (card instanceof Array) {
                    hasGang = true;
                    var cardInfo = this.addOneCard(box, card[0], posX);
                    this.addOneCard(box, card[0], posX).y -= this.cardStackSpace;
                    posX += cardInfo.width;
                }
                else {
                    /** 留出碰牌的位置 */
                    if (card < 0) {
                        posX -= card;
                    }
                    else {
                        card = Number(card);
                        if (card != Number.NaN)
                            posX += this.addOneCard(box, card, posX).width;
                    }
                }
            }
            box.y += this.cardsBoxHeight / 2;
            if (hasGang)
                box.y += this.cardStackSpace / 2;
        };
        /**标签按钮，添加监听 */
        HelpInfoDlg.prototype.initTagUI = function (json) {
            for (var key in json) {
                var imgOn = new Laya.Image("img/chalk2_bq1.png");
                var labelOn = new Laya.Label(key);
                imgOn.sizeGrid = "21,19,20,65";
                imgOn.addChild(labelOn);
                imgOn.name = key + "_ON";
                labelOn.dataSource = { anchorX: 0.5, anchorY: 0.5, x: 80, y: 35, color: "#582a00" };
                this.gameTagOnBtns[key] = imgOn;
                var imgOff = new Laya.Image("img/chalk2_bq2.png");
                var labelOff = new Laya.Label(key);
                imgOff.sizeGrid = "21,19,20,65";
                imgOff.addChild(labelOff);
                imgOff.name = key + "_OFF";
                labelOff.dataSource = { anchorX: 0.5, anchorY: 0.5, x: 80, y: 35, color: "#ffe000" };
                this.gameTagOffBtns[key] = imgOff;
                imgOff.on(Laya.Event.CLICK, this, this.onGameTypeClicked, [key]);
                this.root.addChild(imgOn);
                this.root.addChild(imgOff);
                imgOn.y = this.curTagPosY;
                imgOff.y = this.curTagPosY;
                this.curTagPosY += 70;
            }
        };
        HelpInfoDlg.prototype.onGameTypeClicked = function (gameType) {
            var _this = this;
            //按钮的显示与隐藏
            Object.keys(this.gameTagOffBtns).forEach(function (n) {
                var btn = _this.gameTagOffBtns[n];
                if (btn)
                    btn.visible = n != gameType;
                else {
                    console.log(btn.name + "not valid");
                }
            });
            Object.keys(this.gameTagOnBtns).forEach(function (n) {
                var btn = _this.gameTagOnBtns[n];
                if (btn)
                    btn.visible = n == gameType;
                else {
                    console.log(btn.name + "not valid");
                }
            });
            //加载对应玩法
            this.setHelpForTheSelectGameType(gameType);
        };
        /**从JSON中读取玩法配置，加入到对应滚动列表中 */
        HelpInfoDlg.prototype.setHelpForTheSelectGameType = function (gameType) {
            var _this = this;
            //初始化panel属性
            this.scrollPanel.removeChildren(0, this.scrollPanel.numChildren);
            this.scrollPanel.scrollTo(0, 0);
            this.scrollPanel.vScrollBar.stopScroll();
            this.currentPosY = 0;
            this.showCards = new Array();
            this.CONFIG[gameType].forEach(function (congfig) {
                var space = _this.titleSpace;
                for (var element in congfig) {
                    switch (element) {
                        case "title":
                            _this.createLabel(congfig[element], "#244f04", _this.titleFontSize);
                            break;
                        case "subTitle":
                            _this.createLabel(congfig[element], "#5e7abf", _this.otherFontSize);
                            break;
                        case "content":
                            _this.createLabel(congfig[element], "#7c2c00", _this.otherFontSize);
                            break;
                        case "cards":
                            _this.createCards(congfig[element]);
                            break;
                        case "space":
                            space = congfig[element];
                            break;
                        default:
                            console.error("玩法配置有问题请检查");
                    }
                }
                _this.currentPosY += space;
            });
            this.scrollPanel.refresh();
        };
        HelpInfoDlg.prototype.OnHelpInfoLoaded = function () {
            this.inputView.visible = false;
            if (!this.destroyed) {
                // let temp = Laya.loader.getRes("res/helpInfo.json", );
                var temp = this.inputView.textArea.text;
                this.CONFIG = JSON.parse(temp);
                this.initTagUI(this.CONFIG);
                for (var key in this.CONFIG) {
                    this.onGameTypeClicked(key);
                    break;
                }
            }
            else {
            }
        };
        return HelpInfoDlg;
    }(ui.HelpUI));
    demo.HelpInfoDlg = HelpInfoDlg;
})(demo || (demo = {}));
//# sourceMappingURL=HelpInfoDlg.js.map