import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default  function AvatarHeader({imageUrl}: {imageUrl: string}) {
 
  return (
    <Avatar>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
