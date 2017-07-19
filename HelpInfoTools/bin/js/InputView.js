var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var demo;
(function (demo) {
    var InputView = (function (_super) {
        __extends(InputView, _super);
        function InputView() {
            _super.call(this);
            // this.textArea.on(Laya.Event.ENTER, this, () => {
            //     this.visible = false;
            // });
        }
        return InputView;
    }(ui.InputViewUI));
    demo.InputView = InputView;
})(demo || (demo = {}));
//# sourceMappingURL=InputView.js.map