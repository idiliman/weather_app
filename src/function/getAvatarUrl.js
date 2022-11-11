import randomString from 'randomstring';

export default function getAvatarUrl() {
  return `https://avatars.dicebear.com/api/avataaars/${randomString.generate()}.svg`;
}
