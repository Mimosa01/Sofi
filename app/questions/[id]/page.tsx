import { PageProps } from "@/.next/types/app/page";
import QuestionPage from "./QuestionPage";

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <QuestionPage id={Number(id)} />;
}
