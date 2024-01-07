import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {brand}=request.json()
        const brands={brand}
        return NextResponse.json(brands)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a brands"
        },{
            status:500
        })
    }

}