const container: HTMLDivElement = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const ibtn: HTMLButtonElement = document.createElement(`button`);
ibtn.innerHTML = 'Increment';
ibtn.className = 'btn ibtn';
ibtn.addEventListener(`click`, () => {
  const el: any = document.querySelector(`.ts1`);
  service(`increment`, JSON.stringify({'num': el.innerText}), el);
})
container.appendChild(ibtn);

const el: HTMLDivElement = document.createElement('div');
el.innerText = '0';
el.className = 'ts1';
container.appendChild(el);

const dbtn: HTMLButtonElement = document.createElement(`button`);
dbtn.innerHTML = 'Decrement';
dbtn.className = 'btn dbtn';
dbtn.addEventListener(`click`, () => {
  const el: any = document.querySelector(`.ts1`);
  service(`decrement`, JSON.stringify({'num': el.innerText}), el);
})
container.appendChild(dbtn);

const service = (uri: string, data: string, el: HTMLDivElement) => {
    const serviceUrl = `http://localhost:8080`;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${serviceUrl}/${uri}`, true);
    
    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    
    xhr.onreadystatechange = () => {//Call a function when the state changes.
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        // Request finished. Do processing here.
        el.innerHTML = xhr.responseText;
        
      }
    }
    xhr.send(data);
  }