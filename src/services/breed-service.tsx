import { Subject } from 'rxjs';

const subject = new Subject();

export const breedService = {
    setData: (breed: string) => subject.next( breed ),
    clearData: () => subject.next(""),
    getData: () => subject.asObservable()
}
