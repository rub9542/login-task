import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";

export default function TextareaDecorators(props) {
  const [text, setText] = React.useState("");
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const placeText = (data) => {
    if (data.length < 1001) {
      props.onChange(data);
      setText(data);
    }
  };
  return (
    <Textarea
      placeholder="Enter Description"
      value={text}
      onChange={(event) => placeText(event.target.value)}
      minRows={2}
      maxRows={4}
      startDecorator={<Box sx={{ display: "flex", gap: 0.5 }}></Box>}
      endDecorator={
        <Typography level="body-xs" sx={{ ml: "auto" }}>
          {text.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
}
