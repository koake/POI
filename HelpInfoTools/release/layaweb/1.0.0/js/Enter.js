var test = ui.test.TestPageUI;
var Label = laya.ui.Label;
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
// 程序入口
Laya.init(1334, 750);
Laya.loader.load([
    { url: "res/atlas/CommonUI.json", type: Loader.ATLAS },
    { url: "res/atlas/img.json", type: Loader.ATLAS },
    { url: "res/atlas/mahjong_tile.json", type: Loader.ATLAS },
], Handler.create(this, this.onLoaded));
function onLoaded() {
    //实例UI界面
    // Laya.stage.addChild(testUI);
    Laya.stage.addChild(new demo.HelpInfoDlg());
}
//# sourceMappingURL=Enter.js.map