import {NextResponse, NextRequest} from "next/server"
import {revalidateTag} from "next/cache"

export function GET(req: NextRequest){
    revalidateTag("product", { expire: 0 })
    const redirect = new URL("/rota6", req.url)
    console.log(redirect)
    return NextResponse.redirect(redirect)
}