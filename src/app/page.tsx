import GetJson from "@/components/getJson";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <h1>JSON Tree Viewer</h1>
     <h1>Simple JSON Viewer that runs completely on-client. No data exchange </h1>
     <GetJson/>
    </main>
  )
}
