import RenderService from '@viewServices/RenderService';
import SubscribeEventsSevice from '@viewServices/SubscribeEventsSevice';

class View {
  constructor(model) {
    const screen = RenderService.render(model);
    SubscribeEventsSevice.subscribe(model, screen);
  }
}

export default View;
