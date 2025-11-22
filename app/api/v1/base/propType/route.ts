import { PropertyTypeService } from "@/api/services/PropTypeService";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    console.log(" --- ", body);

    const response = await PropertyTypeService.addPropertyType(body);
    return Response.json({ result: response });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function PUT(req: Request) {
  const body = await req.json();
  try {
    const response = await PropertyTypeService.updatePropertyType(body);
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
    await PropertyTypeService.deletePropertyType(id);
    return Response.json({ result: "ok" });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function GET(req: Request) {
  try {
    const response = await PropertyTypeService.getPropertyTypes();
    return Response.json({ result: response });
  } catch (error) {
    return Response.json({ error });
  }
}
