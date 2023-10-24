import styles from './FilterMenuButton.module.css';
/**
 *
 * @param {object} params
 * @param {"sports"|"music"|"art"|"food"} params.category
 * @param {boolean} params.active
 * @returns
 */
function FilterMenuButton({ active = false, category }) {
  return (
    <>
      <div className={styles.test}>
        {category === 'sports' ? (
          <button className={styles.button}>
            <div
              className={
                active ? styles.iconDivActive : styles.iconDivInactive
              }>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  className={active ? styles.active : styles.inactive}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.7963 12.5217C18.0318 11.7177 18.1582 10.867 18.1582 9.98682C18.1582 9.07737 18.0233 8.19943 17.7724 7.37192C17.5283 7.42031 17.2928 7.47088 17.0657 7.52354C14.824 8.04319 13.3947 8.76567 12.5426 9.59454C12.4075 9.72592 12.2869 9.85998 12.1799 9.99632C12.0697 10.1367 11.9738 10.2796 11.8914 10.4244L12.37 10.5944L12.8552 10.7668L16.8713 12.1932L17.7963 12.5217ZM17.4618 13.4641L12.495 11.7L12.0148 11.5295L11.5567 11.3668L11.5389 11.3605C11.5047 11.5287 11.4842 11.6984 11.4762 11.8688C11.4679 12.0467 11.4731 12.2254 11.4902 12.4044C11.6471 14.0452 12.8073 15.7056 13.7413 16.8819C13.9023 17.0847 14.0566 17.2731 14.1979 17.4446C15.6383 16.4693 16.7812 15.0876 17.4618 13.4641ZM12.986 18.1346C10.8801 15.6153 10.0666 13.5571 10.0783 11.898C10.0795 11.722 10.0901 11.5504 10.1093 11.3833C10.129 11.212 10.158 11.0454 10.1954 10.8833L10.1952 10.8832L9.94027 10.7927L9.7215 10.715L9.4691 10.6253L9.43955 10.7085L9.30176 11.0965L9.13441 11.5677L9.08134 11.7171L6.95893 17.6928L6.62744 18.6261C7.43024 18.8609 8.27952 18.9868 9.1582 18.9868C10.527 18.9868 11.8244 18.6812 12.986 18.1346ZM5.87032 18.3673L6.42349 18.5638C6.23637 18.5042 6.05191 18.4386 5.87032 18.3673ZM5.68475 18.2921L6.01649 17.3581L8.1389 11.3823L8.19197 11.2329L8.35931 10.7618L8.49711 10.3738L8.52666 10.2906L8.27426 10.201L8.05549 10.1233L7.80053 10.0327L7.80033 10.0326C7.72717 10.182 7.64449 10.3296 7.55176 10.4749C7.46129 10.6168 7.36126 10.7565 7.25119 10.8939C6.2127 12.1899 4.28053 13.2747 1.05163 13.901C2.00514 15.8722 3.65645 17.4428 5.68475 18.2921ZM0.543961 12.6017C0.293095 11.7742 0.158203 10.8963 0.158203 9.98682C0.158203 9.10496 0.285035 8.25273 0.521453 7.44736L1.45925 7.78044L5.5008 9.21589L5.981 9.38645L6.43908 9.54914L6.45684 9.55545C6.3773 9.70762 6.28615 9.85214 6.18485 9.98945C6.07914 10.1327 5.96238 10.2681 5.83621 10.3962C4.67943 11.5705 2.73183 12.1271 1.2651 12.4507C1.00761 12.5075 0.764932 12.5572 0.543961 12.6017ZM0.818538 6.59672L0.548772 7.3561C0.627585 7.09785 0.717699 6.84453 0.818538 6.59672ZM0.8564 6.50513L5.80994 8.26449L6.29518 8.43683L6.77377 8.60681C6.80114 8.44239 6.81689 8.27109 6.81994 8.09261C6.8229 7.91931 6.81389 7.73923 6.79195 7.55207C6.65352 6.37137 6.00022 4.90923 4.5885 3.09199C4.44368 2.90557 4.29088 2.71541 4.12984 2.52143C2.68535 3.49629 1.53905 4.87934 0.8564 6.50513ZM5.35107 1.82935C6.8138 3.39965 8.28382 5.78538 8.25649 8.06342C8.25437 8.23998 8.24326 8.4159 8.22245 8.59075C8.20249 8.7584 8.17362 8.92507 8.13522 9.09037L8.39018 9.18092L8.60911 9.25868L8.86135 9.34827L8.89062 9.26586L9.02869 8.8771L9.19604 8.40594L9.25208 8.24815L11.3715 2.2808L11.7017 1.35125C10.8951 1.11407 10.0415 0.986816 9.1582 0.986816C7.79751 0.986816 6.50735 1.28878 5.35107 1.82935ZM12.2074 1.51648L12.1348 1.49068C12.159 1.49918 12.1832 1.50778 12.2074 1.51648ZM12.6439 1.68668L12.314 2.61553L10.1945 8.58288L10.1385 8.74067L9.97114 9.21183L9.83306 9.6006L9.80379 9.683L10.056 9.77259L10.275 9.85034L10.5299 9.9409C10.6044 9.78841 10.6871 9.64087 10.7774 9.49819C10.8715 9.34939 10.9739 9.20587 11.0836 9.06752C12.4971 7.28533 15.1368 6.36144 17.2606 6.06413C16.3084 4.1009 14.6637 2.53592 12.6439 1.68668Z'
                  fill='none'
                />
              </svg>
            </div>
            <p className={styles.text}>Sports</p>
          </button>
        ) : category === 'music' ? (
          <button className={styles.button}>
            <div
              className={
                active ? styles.iconDivActive : styles.iconDivInactive
              }>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 17 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M5.7301 4.5L16.7301 1V12V13.0729C16.7301 13.6826 16.5882 14.2839 16.3155 14.8292L16.1301 15.2C15.8705 15.7193 15.4494 16.1404 14.9301 16.4C14.1747 16.7777 13.2855 16.7777 12.5301 16.4C12.0108 16.1404 11.5897 15.7193 11.3301 15.2C10.9524 14.4446 10.9524 13.5554 11.3301 12.8C11.5897 12.2807 12.0108 11.8596 12.5301 11.6C13.2855 11.2223 14.1747 11.2223 14.9301 11.6L15.6694 11.9696C15.6973 11.9836 15.7301 11.9633 15.7301 11.9321V6.91623C15.7301 6.71146 15.5295 6.56687 15.3352 6.63162L6.93523 9.43162C6.81273 9.47246 6.7301 9.5871 6.7301 9.71623V14.5V14.5729C6.7301 15.1826 6.58816 15.7839 6.31551 16.3292L6.1301 16.7C5.87046 17.2193 5.44939 17.6404 4.9301 17.9C4.17468 18.2777 3.28552 18.2777 2.5301 17.9C2.01081 17.6404 1.58975 17.2193 1.3301 16.7C0.952394 15.9446 0.952394 15.0554 1.3301 14.3C1.58975 13.7807 2.01081 13.3596 2.5301 13.1C3.28552 12.7223 4.17468 12.7223 4.9301 13.1L5.70235 13.4861C5.7151 13.4925 5.7301 13.4832 5.7301 13.469V4.5Z'
                  fill='#1F1F1F'
                  strokeWidth='0.5'
                />
              </svg>
            </div>
            <p className={styles.text}>Music</p>
          </button>
        ) : category === 'art' ? (
          <button className={styles.button}>
            <div
              className={
                active ? styles.iconDivActive : styles.iconDivInactive
              }>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M15.8155 5.85411C16.8026 6.54136 17.4396 7.61683 17.67 8.99955C17.9166 10.4994 17.6327 11.8424 17.5335 12.2521C15.7067 18.7614 7.39142 20.9376 2.6246 16.1341C-1.26928 12.3701 -0.672856 5.60391 3.78755 2.5243C4.70365 1.87816 6.32475 1.70732 7.04908 2.6168C7.93293 3.75082 6.81273 5.1021 7.05913 5.68362C7.53072 6.37893 8.96485 5.79181 10.1058 5.4386C10.2053 5.4078 10.2729 5.52842 10.1965 5.59917L7.60861 7.99379C6.83012 8.00869 6.05683 8.31253 5.46408 8.90497C4.51435 9.78015 4.15243 12.1591 4.07462 13.7748C4.04914 14.3039 4.47516 14.7299 5.00422 14.7044C6.61847 14.6266 8.99758 14.2653 9.87408 13.315C10.1447 13.0444 10.3595 12.7326 10.5126 12.3938L10.6993 11.6686C10.7891 11.3199 11.0625 11.0522 11.3928 10.9089C11.6279 10.8069 11.8835 10.6682 12.0386 10.5C13.4531 8.96574 15.3333 6.36142 15.6794 5.87809C15.7109 5.83421 15.7712 5.82327 15.8155 5.85411Z'
                  fill='white'
                />
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M16.8738 2.7028L11.0593 9.85917C10.8337 10.1368 10.3906 10.056 10.2775 9.71668C10.1271 9.26552 9.77306 8.9115 9.3219 8.76112L9.29205 8.75117C8.9523 8.63792 8.85739 8.20245 9.1192 7.95809L15.7372 1.78131C15.9376 1.59429 16.1571 1.42891 16.3921 1.2879L18.1956 0.205806C18.2848 0.152245 18.3863 0.253737 18.3328 0.343005L17.173 2.27595C17.0835 2.42513 16.9835 2.56777 16.8738 2.7028Z'
                  fill='white'
                />
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M5.28349 12.5204L5.04909 13.4579C5.04375 13.4793 5.05992 13.5 5.08195 13.5H5.45759C6.50199 13.5 7.53678 13.3007 8.50648 12.9128C9.12983 12.6635 9.53857 12.0598 9.53857 11.3884V11C9.53857 10.1716 8.867 9.50001 8.03857 9.50001H7.72289C6.99706 9.50001 6.33353 9.91009 6.00893 10.5593C5.6963 11.1846 5.45304 11.8422 5.28349 12.5204Z'
                  fill='white'
                />
              </svg>
            </div>
            <p className={styles.text}>Art</p>
          </button>
        ) : category === 'food' ? (
          <button className={styles.button}>
            <div
              className={
                active ? styles.iconDivActive : styles.iconDivInactive
              }>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 36 38'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M18.5804 23.7023L30.8752 37.0216C30.8798 37.0266 30.8862 37.0294 30.8929 37.0294C33.1612 37.0294 35 35.19 35 32.9218C35 32.9154 34.9975 32.9092 34.9929 32.9047L19.0441 16.9559L3.20989 1.12164C3.15977 1.07152 3.07395 1.10013 3.06392 1.17029C2.42588 5.63662 3.76789 10.1591 6.73884 13.5545L16.318 24.502C16.4079 24.6048 16.5558 24.6339 16.6779 24.5728L18.4622 23.6807C18.502 23.6608 18.5502 23.6696 18.5804 23.7023Z'
                  fill='#A6A6A6'
                />
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M14.1996 26.523L10.5063 22.8297C10.3891 22.7125 10.1991 22.7125 10.082 22.8297L1.09364 31.818C1.05176 31.8599 1.02321 31.9132 1.0116 31.9713L0.588348 34.0876C0.30846 35.487 1.5423 36.7208 2.94174 36.4409L5.05799 36.0177C5.11607 36.0061 5.16941 35.9775 5.21129 35.9357L14.1996 26.9473C14.3168 26.8302 14.3168 26.6402 14.1996 26.523Z'
                  fill='#A6A6A6'
                />
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M23.5366 17.3306L19.6987 13.4927C19.6138 13.4078 19.5877 13.2806 19.6323 13.1692L21.5948 8.26294C21.6099 8.22522 21.6325 8.19095 21.6612 8.16223L27.582 2.24143C27.6991 2.12427 27.8891 2.12427 28.0063 2.24143L28.6114 2.84658C28.7286 2.96373 28.7286 3.15368 28.6114 3.27084L23.8886 7.99364C23.7714 8.11079 23.7714 8.30074 23.8886 8.4179L25.5232 10.0525C25.6403 10.1696 25.8303 10.1696 25.9474 10.0525L30.6702 5.32966C30.7874 5.21251 30.9773 5.21251 31.0945 5.32966L31.6996 5.93481C31.8168 6.05197 31.8168 6.24192 31.6996 6.35908L26.9768 11.0819C26.8597 11.199 26.8597 11.389 26.9768 11.5061L28.6114 13.1407C28.7286 13.2579 28.9185 13.2579 29.0357 13.1407L33.7585 8.4179C33.8756 8.30074 34.0656 8.30074 34.1827 8.4179L34.7879 9.02305C34.905 9.1402 34.905 9.33015 34.7879 9.44731L28.8671 15.3681C28.8383 15.3968 28.8041 15.4194 28.7664 15.4345L23.8601 17.397C23.7487 17.4416 23.6215 17.4155 23.5366 17.3306Z'
                  fill='#A6A6A6'
                />
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M14.1996 26.523L10.5063 22.8297C10.3891 22.7125 10.1991 22.7125 10.082 22.8297L1.09364 31.818C1.05176 31.8599 1.02321 31.9132 1.0116 31.9713L0.588348 34.0876C0.30846 35.487 1.5423 36.7208 2.94174 36.4409L5.05799 36.0177C5.11607 36.0061 5.16941 35.9775 5.21129 35.9357L14.1996 26.9473C14.3168 26.8302 14.3168 26.6402 14.1996 26.523Z'
                  strokeWidth='0.5'
                />
                <path
                  className={active ? styles.active : styles.inactive}
                  d='M23.5366 17.3306L19.6987 13.4927C19.6138 13.4078 19.5877 13.2806 19.6323 13.1692L21.5948 8.26294C21.6099 8.22522 21.6325 8.19095 21.6612 8.16223L27.582 2.24143C27.6991 2.12427 27.8891 2.12427 28.0063 2.24143L28.6114 2.84658C28.7286 2.96373 28.7286 3.15368 28.6114 3.27084L23.8886 7.99364C23.7714 8.11079 23.7714 8.30074 23.8886 8.4179L25.5232 10.0525C25.6403 10.1696 25.8303 10.1696 25.9474 10.0525L30.6702 5.32966C30.7874 5.21251 30.9773 5.21251 31.0945 5.32966L31.6996 5.93481C31.8168 6.05197 31.8168 6.24192 31.6996 6.35908L26.9768 11.0819C26.8597 11.199 26.8597 11.389 26.9768 11.5061L28.6114 13.1407C28.7286 13.2579 28.9185 13.2579 29.0357 13.1407L33.7585 8.4179C33.8756 8.30074 34.0656 8.30074 34.1827 8.4179L34.7879 9.02305C34.905 9.1402 34.905 9.33015 34.7879 9.44731L28.8671 15.3681C28.8383 15.3968 28.8041 15.4194 28.7664 15.4345L23.8601 17.397C23.7487 17.4416 23.6215 17.4155 23.5366 17.3306Z'
                  strokeWidth='0.5'
                />
              </svg>
            </div>
            <p className={styles.text}>Food</p>
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default FilterMenuButton;