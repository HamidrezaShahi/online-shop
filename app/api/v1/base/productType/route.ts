import { ProductTypeService } from "@/api/services/ProductTypeService";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    console.log(" --- ", body);

    const response = await ProductTypeService.addProductType(body);
    return Response.json({ result: response });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function PUT(req: Request) {
  const body = await req.json();
  try {
    const response = await ProductTypeService.updateProductType(body);
    return Response.json({ result: response });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return Response.json({ error: "No id provided" });
  try {
    await ProductTypeService.deleteProductType(id);
    return Response.json({ result: "ok" });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function GET(req: Request) {
  try {
    const response = await ProductTypeService.getProductTypes();
    return Response.json({ result: response });
  } catch (error) {
    return Response.json({ error });
  }
}
