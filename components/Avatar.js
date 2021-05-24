import Image from 'next/image';
function Avatar({ url, className }) {
  return (
    <Image
      src={url}
      height={50}
      width={50}
      layout="fixed"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
}

export default Avatar;
