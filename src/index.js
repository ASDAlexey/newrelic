import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'newrelic'], ' ');

  return element;
}

document.body.appendChild(component());

const error = () => {
  try {
    throw 'fff'
  } catch (err) {
    console.error(err);
  }
};

error();
