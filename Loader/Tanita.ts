import {chunk, skip} from "../itertools"

const TanitaTranslationDictionary = {
    MO: "model",
    DT: "date",
    TI: "time",
    AG: "age",
    Hm: "height",
    Wk: "weight",
    MI: "bmi",
    FW: "fat",
    Fr: "fat_right_arm",
    Fl: "fat_left_arm",
    FR: "fat_right_leg",
    FL: "fat_left_arm",
    FT: "fat_torso",
    mW: "muscle_weight",
    mr: "muscle_right_arm",
    ml: "muscle_left_arm",
    mR: "muscle_right_leg",
    mL: "muscle_left_leg",
    mT: "muscle_torso",
    bW: "bone_weight",
    IF: "viseral_fat",
    rD: "real_diet",
    rA: "real_age",
    ww: "peso_agua",
    CS: "checksum",
    DB: "date_of_birth"
}


const SupportedTanitaModels = ["BC-601"]

function checkValidCSV(): boolean{
    var firstLine : [string]
    let pairs = skip(chunk(firstLine, 2), 3) 

    //should contain the model
    let maybe = pairs.next()
    if(maybe.done) return false;

    let [key, model]  = maybe.value as [string, string];
    if(key != "MO") return false;

    if(SupportedTanitaModels.includes(model)) return true; 
}

function iterate<T>(list : [T]) : IIterableIterator<T, any, T> {
    
}

class IIterableIterator<T, TReturn, TNext> implements IterableIterator<T, TReturn, TNext> {
    internal : IterableIterator<T>;


    [Symbol.iterator](){
        return this.internal;
    }

    next(...args: [] | [TNext]): IteratorResult<T, TReturn> {
        return this.internal.next(args); 
    }

    return(value?: TReturn): IteratorResult<T, TReturn> {
        return this.internal.return(value); 
    }

    throw(e?: any): IteratorResult<T, TReturn> {
        return this.internal.throw(e); 
    }

    skip(n : number): IIterableIterator<T, TReturn, TNext>{
        for(i = 0; i < n; i++){
            let internal = str.next()
        }
        return this;
    }


}