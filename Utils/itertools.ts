module itertools {

    export function* chunk<T>(str: IterableIterator<T>, n : number): IterableIterator<[T]>{
        while(true) {
            let a = []
            for(i = 0; i < n; i++) {
                let n = str.next()
                if(n.done) return;
                a.push(n.value);
            }
            yield a;
        }
    }

    export function* skip<T>(str: IterableIterator<T>, n : number): IterableIterator<T>{
        for(i = 0; i < n; i++){
            let n = str.next()
            if(n.done) return;
        }
        yield* str;
    }
}


