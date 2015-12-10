module goldman {
	/**
	 * 主游戏容器
	 */
	export class GameContainer extends egret.DisplayObjectContainer {
		/**stage宽*/
		private stageW:number;
		/**stage高*/
		private stageH:number;
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}

		/**初始化*/
		private onAddToStage(event:egret.Event) {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			this.stageW = this.stage.stageWidth;
			this.stageH = this.stage.stageHeight;
			this.createGameScene();
		}

		/**创建游戏场景*/
		private createGameScene():void {
			var hookManager:HookManager = new HookManager();
			this.addChild(hookManager);
			hookManager.x = this.stageW / 2;
		}
	}
}