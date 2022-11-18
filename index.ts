import { Observable } from 'rxjs';

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;

  //emit a value every 2 seconds
  setInterval(() => {
    subscriber.next(counter++);
  }, 2000);
});

interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Unsubscribe'),
});
