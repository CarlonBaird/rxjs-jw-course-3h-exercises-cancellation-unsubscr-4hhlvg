import { Observable } from 'rxjs';

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;

  //emit a value every 2 seconds
  const myInterval = setInterval(() => {
    console.log('Emitted:', counter);
    subscriber.next(counter++);
  }, 2000);

  //Teardown logic: used to avoid memory leaks or leaving the setInterval() code running
  return () => {
    clearInterval(myInterval);
  };
});

const subscription = interval$.subscribe({
  next: (value) => console.log(value),
});

//Unsubscribe after 7 seconds
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
