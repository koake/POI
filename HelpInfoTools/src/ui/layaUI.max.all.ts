
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class HelpUI extends View {
		public root:Laya.Box;
		public scrollPanel:Laya.Panel;
		public btnInput:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":960,"name":"root","height":640},"child":[{"type":"Box","props":{"y":0,"x":-1,"width":960,"var":"root","name":"root","mouseThrough":true,"height":640},"child":[{"type":"Box","props":{"y":320,"x":550,"width":782,"height":620,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":782,"skin":"CommonUI/img_bd.png","sizeGrid":"22,22,19,19","height":620,"anchorY":0,"anchorX":0}},{"type":"Image","props":{"y":74,"x":16,"width":750,"skin":"CommonUI/img_bd2.png","sizeGrid":"16,66,55,17","height":530,"anchorY":0,"anchorX":0}},{"type":"Image","props":{"y":1,"width":782,"skin":"CommonUI/img_tital.png"}},{"type":"Image","props":{"y":32,"x":400,"skin":"img/z_wfsm.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Panel","props":{"y":92,"x":195,"width":740,"var":"scrollPanel","height":520}},{"type":"Button","props":{"y":10,"x":828,"width":98,"var":"btnInput","skin":"CommonUI/btn_green.png","sizeGrid":"26,28,26,40","labelSize":40,"label":"输入","height":70}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HelpUI.uiView);
        }
    }
}

module ui {
    export class InputViewUI extends View {
		public root:Laya.Box;
		public textArea:Laya.TextArea;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Box","props":{"var":"root"},"child":[{"type":"Image","props":{"y":37,"x":95,"width":385,"skin":"CommonUI/img_bd2.png","sizeGrid":"26,60,51,38","height":307},"child":[{"type":"TextArea","props":{"var":"textArea","top":20,"right":20,"prompt":"输入生成的json","left":20,"bottom":20}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.InputViewUI.uiView);
        }
    }
}

module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);
        }
    }
}
