import prismadb from "@/lib/prismadb"
import { CompanionForm } from "./components/companion-form"

interface CompanionPageProps {
  params: {
    companionId: string
  }
}

const CompanionPage = async ({
  params
}: CompanionPageProps) => {

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    }
  })

  const categories = await prismadb.category.findMany()

  return (
    <CompanionForm
      initialData={companion}
      categories={categories}
    />
  )
}

export default CompanionPage