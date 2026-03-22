import {NextResponse, NextRequest} from "next/server"
import {revalidateTag} from "next/cache"

export function GET(req: NextRequest){
    revalidateTag("product", { expire: 0 })
    return NextResponse.redirect("http://localhost:3000/rota6")
}