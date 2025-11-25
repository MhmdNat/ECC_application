import { db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function saveUserProfile(uid, profile) {
  // Merge so we don't overwrite unrelated fields
  return setDoc(doc(db, "users", uid), profile, { merge: true });
}

export async function fetchUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}
