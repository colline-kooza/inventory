import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title,location , type , description}=request.json()
        const warehouse={title,location , type , description}
        console.log(warehouse)
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a warehouse"
        },{
            status:500
        })
    }
}   