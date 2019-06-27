console.log('App');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisiveApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderIndecisiveApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderIndecisiveApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          //app.options.map((option) => <li key={option}>{option}</li>)
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
    );

  ReactDOM.render(template,appRoot);
};

const appRoot = document.getElementById('app');

renderIndecisiveApp();