interface Props {
  text: string
}

const Category = ({ text }: Props) => {
  return (
    <span className="mr-3 text-sm font-bold capitalize text-pink-500 hover:text-pink-600 dark:hover:text-pink-400">
      {text}
    </span>
  )
}

export default Category
