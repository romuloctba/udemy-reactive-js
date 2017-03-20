import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// const simple$ = new Rx.Observable(observer => {
//     observer.next(1);
//     observer.next(2);
//     // observer.next(3);
//     // observer.next(4);

//     observer.complete()
// });

// simple$.first()
//     .subscribe(createSubscriber("first"));  // If nothing returned an erro will be throw

// simple$.last()
//     .subscribe(createSubscriber("last"));

// simple$.single()
//     .subscribe(createSubscriber("single")); // If more then one return will throw error 

// simple$.take(2)
//     .subscribe(createSubscriber("take")); 

// simple$.skip(2)
//     .subscribe(createSubscriber("skip"));

// simple$
//     .take(2)
//     .skip(1)
//     .subscribe(createSubscriber("take/skip"));


// Rx.Observable.interval(500)
//     .skipWhile( i => i < 4)
//     .takeWhile( i => i < 10)
//     .subscribe(createSubscriber("skipWhile"));


Rx.Observable.interval(500)
    .skipUntil( Rx.Observable.timer(2000)) 
    .takeUntil( Rx.Observable.timer(4000))
    .subscribe(createSubscriber("skipUntil"))

