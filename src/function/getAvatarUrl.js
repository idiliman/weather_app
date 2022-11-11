import randomString from 'randomstring';

export default function getAvatarUrl() {
  return `https://avatars.dicebear.com/api/bottts/${randomString.generate()}.svg`;
}
