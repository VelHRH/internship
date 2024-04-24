import Controller from '@controller/controller';
import Model from '@model/model';
import View from '@view/view';
import './style.css';

const model = new Model();
new View(model);
new Controller(model);
