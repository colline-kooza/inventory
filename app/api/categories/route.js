import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {description,name}=await request.json()
        const category={description , name}
        console.log(category)
        return NextResponse.json(category)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a category"
        },{
            status:500
        })
    }
}