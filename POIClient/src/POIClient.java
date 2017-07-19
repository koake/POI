import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.json.JSONException;
//
//class MySet {
//
//    public String key;
//    public String value;
//    static Pattern pattern = Pattern.compile("[0-9]*");
//
//    public MySet(String key, String value) {
//	this.key = key;
//	this.value = value;
//    }
//
//    @Override
//    public String toString() {
//	if (this.value.startsWith("[")) {
//	    return "{\"" + this.key + "\":" + this.value + "}";
//	} else if (isNum(this.value)) {
//	    return "{\"" + this.key + "\":" + this.value + "}";
//	}
//	return "{\"" + this.key + "\":\"" + this.value + "\"}";
//    }
//
//    public static boolean isNum(String str) {
//	return pattern.matcher(str).matches();
//    }
//}
import org.json.JSONObject;

/**
 * 只支持Excel2007以下的.xls文件
 * @author wanminhua
 *
 */
public class POIClient {

    private static Map<String, List<JSONObject>> map = new HashMap<String, List<JSONObject>>();
    private static String currentFilePath;
    private static String xlsFileName = "helpInfo.xls";
    private static String outJsonFileName = "helpInfo.json";
    private static String encoding = "utf-8";
    private static HSSFSheet sheet;

    public static void main(String[] args) {
	currentFilePath = System.getProperty("user.dir");
	String xlsFilePath = currentFilePath + "/" + xlsFileName;
	String jsonFilePath = currentFilePath + "/" + outJsonFileName;
	try {
	    JSONObject jo = new JSONObject(readFile(xlsFilePath));
	    writeFile(jsonFilePath, encoding, jo.toString());	
//	    System.out.println(jo.toString());
	} catch (IOException | JSONException e) {
	    e.printStackTrace();
	}	
    }
    
    /**
     * 读取xls文件，返回
     * key为sheetName， value为jsonArray的map
     * 这里读取的是xls文件的第一列和第二列，第一列为key，第二列为value
     * @param filePath
     * @return
     * @throws IOException
     * @throws JSONException
     */
    public static Map<String, List<JSONObject>> readFile(String filePath)
	    throws IOException, JSONException {
	List<JSONObject> list = null;
	File f = new File(filePath);
	FileInputStream fis = new FileInputStream(f);
	HSSFWorkbook workBook = new HSSFWorkbook(fis);

	int count = workBook.getNumberOfSheets();
	for (int i = 1; i < count; i++) {
	    sheet = workBook.getSheetAt(i);
	    list = new ArrayList<JSONObject>();
	    for (Row row : sheet) {
		String key = getCellValue(row.getCell(0));
		String value = getCellValue(row.getCell(1));
		if (key != null && value != null) {
		    list.add(new JSONObject().put(key, value));
		}
	    }
	    map.put(sheet.getSheetName(), list);
	}
	fis.close();
	return map;
    }
    
    /**
     * 写成json文件
     * @param path
     * @param encoding
     * @param content
     * @throws IOException
     */
    public static void writeFile(String path, String encoding, String content)
	    throws IOException {
	File f = new File(path);
	f.delete();
	f.createNewFile();
	BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(
		new FileOutputStream(f), encoding));
	writer.write(content);
	writer.close();
    }

    /**
     * 获取单元格的内容，只获取number或者String
     * @param cell
     * @return
     */
    public static String getCellValue(Cell cell) {
	if (cell == null) {
	    return null;
	}
	switch (cell.getCellType()) {
	case Cell.CELL_TYPE_NUMERIC:
	    return (int) cell.getNumericCellValue() + "";
	case Cell.CELL_TYPE_STRING:
	    return cell.getStringCellValue();
	}
	return null;
    }
}
