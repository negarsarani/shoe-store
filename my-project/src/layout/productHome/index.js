import El from "@/library/El";
import { cardHome } from "@/library/productHome/CardHome";

export function productHome() {
  return El({
    element:"div",
    className:"",
    child:[cardHome()]
  })
}
