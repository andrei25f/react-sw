interface Props {
    picture: string,
    pos: number
  }

const Friend = ({ picture, pos }: Props) => {
    let styles = 'p-px ';
    if (pos == 7) {
        styles += 'rounded-bl-3xl';
    } else if (pos == 9) {
        styles += 'rounded-br-3xl';
    }
    return (
        <img className={styles} src={picture} alt="Friend" />
    )
}

export default Friend