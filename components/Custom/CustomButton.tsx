import { cn } from "@/lib/utils"


interface Types {
  disabled?: boolean
  isRounded?: boolean
}

function CustomButton({
  disabled = false,
  isRounded = false
}: Types) {
  return (
/*     <button
    className={`text-lg font-bold px-6 ms-1 ${disabled ? 'bg-gray-500' :'bg-teal-400' }${isRounded && 'rounded-4xl'} py-4`}
    >CustomButton
    </button> */
    <button
    className={cn('text-lg font-bold px-6 ms-1', disabled ? 'bg-gray-500' :'bg-teal-400',isRounded && 'rounded-4xl','py-4' )}
    >CustomButton
    </button>
  )
}

export default CustomButton