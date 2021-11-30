interface DetailMeasurement {
    right_arm? : number
    left_arm? : number
    right_leg?: number
    left_leg?: number
    torso?: number
}

interface Measurement {
    date_time: DateTime
    weight: number
    fat: number
    
    weight_detail? : DetailMeasurement
    fat_detail? : DetailMeasurement
    
}



interface UserData {
    birthDate: DateTime

}




interface Loader {
    name(): string
}




