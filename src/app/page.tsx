import { UploadButton } from '../components/UploadButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <h1 className="text-2xl font-semibold m-4">JSON Tree Viewer</h1>
     <h1 className="m-4">Simple JSON Viewer that runs completely on-client. No data exchange </h1>
     <UploadButton />
    </main>
  )
}
