

const Title = ({Text1, Text2}) => {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <p className="text-gray-500">{Text1} <span className="font-medium text-gray-700">{Text2}</span></p>
      <p className="w-8 sm:h-[2px] bg-gray-700"></p>
    </div>
  )
}

export default Title