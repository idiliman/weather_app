import { react, useEffect } from "react";
import randomString from "randomstring";

export default function AvatarUrl() {
    return `https://avatars.dicebear.com/api/avataaars/${randomString.generate()}.svg`;
}
