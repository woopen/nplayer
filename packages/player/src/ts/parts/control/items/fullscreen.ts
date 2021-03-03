import { EVENT } from 'src/ts/constants';
import { icons } from 'src/ts/icons';
import { Player } from 'src/ts/player';
import {
  hide, Component, addDisposableListener, addDisposable, show,
} from 'src/ts/utils';
import { ControlTip } from './helper';

export class FullscreenControlItem extends Component {
  private readonly exitIcon: HTMLElement;

  private readonly enterIcon: HTMLElement;

  private readonly tip: ControlTip;

  constructor(container: HTMLElement, player: Player) {
    super(container);
    this.tip = new ControlTip(this.element);
    this.exitIcon = this.element.appendChild(icons.exitFullscreen());
    this.enterIcon = this.element.appendChild(icons.enterFullscreen());

    if (player.fullscreen.isActive) {
      this.enter();
    } else {
      this.exit();
    }

    addDisposable(this, player.on(EVENT.ENTER_FULLSCREEN, this.enter));
    addDisposable(this, player.on(EVENT.EXIT_FULLSCREEN, this.exit));
    addDisposableListener(this, this.element, 'click', player.fullscreen.toggle);
  }

  private enter = (): void => {
    show(this.exitIcon);
    hide(this.enterIcon);
    this.tip.html = '退出全屏';
  }

  private exit = (): void => {
    hide(this.exitIcon);
    show(this.enterIcon);
    this.tip.html = '全屏';
  }
}