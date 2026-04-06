export interface MateriItem {
  fileName: string
  title: string
  url: string
}

const materiFiles = import.meta.glob('../materi/**/*.html', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const materiByMatkul = Object.entries(materiFiles).reduce<Record<string, MateriItem[]>>(
  (result, [filePath, url]) => {
    const relativePath = filePath.replace('../materi/', '')
    const separatorIndex = relativePath.indexOf('/')

    if (separatorIndex === -1) {
      return result
    }

    const matkulName = relativePath.slice(0, separatorIndex)
    const materiFileName = relativePath.slice(separatorIndex + 1)
    const title = materiFileName.replace(/\.html$/i, '')

    if (!result[matkulName]) {
      result[matkulName] = []
    }

    result[matkulName].push({
      fileName: materiFileName,
      title,
      url,
    })

    return result
  },
  {},
)

for (const materiList of Object.values(materiByMatkul)) {
  materiList.sort((firstItem, secondItem) => firstItem.title.localeCompare(secondItem.title, 'id'))
}

const mataKuliahList = Object.keys(materiByMatkul).sort((firstItem, secondItem) =>
  firstItem.localeCompare(secondItem, 'id'),
)

export const mataKuliah = mataKuliahList

export const getMateriByMatkul = (matkul: string): MateriItem[] => {
  return materiByMatkul[matkul] ?? []
}
