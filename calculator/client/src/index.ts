import Controller from 'controller/Controller';
import Model from 'model/Model';
import CalculatorApi from 'api/CalculatorApi';
import View from 'view/View';
import './style.css';
import ErrorElement from 'view/elements/ErrorElement';

CalculatorApi.getConfig()
  .then(config => {
    const model = new Model(config);
    new View(model);
    new Controller(model);
  })
  .catch(err => {
    new ErrorElement(err.message, null);
  });
