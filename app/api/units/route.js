import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title, abbreviation}=request.json()
        const unit={title, abbreviation}
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a unit"
        },{
            status:500
        })
    }

}