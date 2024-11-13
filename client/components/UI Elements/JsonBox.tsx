interface JsonBoxProps {
  jsonOutput: string
}

function JsonBox({ jsonOutput }: JsonBoxProps) {
  return (
    <div className="w-full p-4 border rounded-md bg-gray-100 shadow-inner">
      <pre className="text-gray-600 whitespace-pre-wrap">
        {jsonOutput || 'The JSON output will appear here...'}
      </pre>
    </div>
  )
}

export default JsonBox
