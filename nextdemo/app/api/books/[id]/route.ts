import books from '@/app/api/db';

export async function PUT(req: Request, context: {params: {id: string}}){
    const id = +context.params.id;
    const book = await req.json();

    const index = books.findIndex((b) => b.id == id);
    books[index] = book;

    return Response.json(books);
}

export async function DELETE(req: Request, context: { params: { id: string } }) {
    const id = +context.params.id;
   

    const index = books.findIndex((b) => b.id == id);
    books.splice(index, 1);
    return Response.json(books);
}