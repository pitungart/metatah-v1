import Invitation from "@/components/Invitation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  /* param utama ?untuk= ; alias menoleransi typo umum */
  const raw = params.untuk ?? params.unutk ?? params.kepada ?? "";
  const guest = (Array.isArray(raw) ? raw[0] : raw).trim() || "Tamu Undangan";
  return <Invitation guest={guest} />;
}
