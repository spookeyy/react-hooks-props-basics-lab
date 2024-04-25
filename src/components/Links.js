import React from 'react'
import user from '../data/user'

export default function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={{link: props.links}}>{user.links.github}</a>
      <a href={{link: props.links}}>{user.links.linkedin}</a>
    </div>
  );
}
