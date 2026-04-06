export default async function ClientId({ params }) {
  const resolvedParams = await params;

  return (
    <>
      <h1>ClientId страница</h1>
      <p>{resolvedParams.clientId}</p>
    </>
  );
}
