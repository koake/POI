import test = ui.test.TestPageUI;
import Label = laya.ui.Label;
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;


// 程序入口
Laya.init(1334, 750);
Laya.loader.load([
	{ url: "res/atlas/CommonUI.json", type: Loader.ATLAS },
	{ url: "res/atlas/img.json", type: Loader.ATLAS },
	{ url: "res/atlas/mahjong_tile.json", type: Loader.ATLAS },
], Handler.create(this, this.onLoaded));

function onLoaded(): void {
	//实例UI界面
	// Laya.stage.addChild(testUI);
	Laya.stage.addChild(new demo.HelpInfoDlg());
}