import Safari from "@/app/components/ui/SafariDemo";

export function SafariDemo() {
  return (
    <div className="relative">
      <Safari
        url="magicui.design"
        className="size-full"
        imageSrc="https://via.placeholder.com/1200x750"
      />
    </div>
  );
}
