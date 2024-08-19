import { Card } from '@/app/ui/dashboard/cards';
import { fetchCardData } from '@/app/lib/data';
const Page = async () => {
  const { totalPaidInvoices } = await fetchCardData();
  return (
    <>
      <p>Customers Page</p>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
    </>
  );
}

export default Page;